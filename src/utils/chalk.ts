import chalk from 'chalk';

export const chalkString = (s: unknown) => chalk.green(`'${s}'`);
export const chalkStringArray = (a: Array<unknown>) => `[ ${a.map(chalkString).join(', ')} ]`;
export const chalkNumber = (n: unknown) => chalk.yellow(`${n}`);
export const chalkBoolean = (b: unknown) => chalk.yellow(b ? 'true' : 'false');
export const chalkDate = (d: Date) => chalk.magenta(d.toISOString());
