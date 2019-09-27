interface JwtConfig {
  jwt: string | undefined;
  jwtExp?: string;
}

export interface Config {
  env: string;
  isDev: boolean;
  isTest: boolean;
  port: number;
  dbUrl: string;
  secrets: JwtConfig;
  apiVersion: string;
}

export interface Configs {
  [key: string]: Config;
}
