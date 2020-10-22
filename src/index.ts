import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { ConsoleReport } from './reportTargets/ConsoleReports';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { Summery } from './Summery';

const csvFileReader = new CsvFileReader('football.csv');

const matchReader = new MatchReader(csvFileReader);
matchReader.load();

const summery = new Summery(
  new WinsAnalysis('Man United'),
  new ConsoleReport()
);

summery.buildAndPrintReport(matchReader.matches);
