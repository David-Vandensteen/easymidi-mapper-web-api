import { YAMLLoader } from 'yaml-loader';

export default class ConfigService {
  config;

  constructor(file) {
    this.config = YAMLLoader(file);
  }

  get() {
    return this.config;
  }
}

export { ConfigService };
