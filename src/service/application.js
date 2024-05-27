import { ConfigService } from '#src/service/config';
import { ExpressService } from '#src/service/express';

export default class ApplicationService {
  static run(configFile) {
    const config = new ConfigService(configFile);
    ExpressService.run(config.get().host, config.get().port);
  }
}

export { ApplicationService };
