import { ApplicationInitStatus, Injectable } from '@angular/core';
import { ApiConnector } from '@deejayy/api-caller';
import { Observable, of } from 'rxjs';

import { ConfigurationService } from '../config/service/config.service';

@Injectable()
export class ApiConnectorService extends ApiConnector {
  public tokenData$: Observable<string> = of('app not initialized yet');
  public defaultApiUrl: string = 'http://localhost/';
  public errorHandler = (payload: string | unknown) => {
    console.error('handling... ', payload);
  };

  constructor(private config: ConfigurationService, private initStatus: ApplicationInitStatus) {
    super();
    this.initStatus.donePromise.then(() => {
      this.defaultApiUrl = this.config.get('apiEndpoint');
      this.tokenData$ = of('token!');
    });
  }
}
