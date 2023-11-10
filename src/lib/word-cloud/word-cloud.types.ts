import { TooltipItem } from 'chart.js/auto';
import { ChartOptions } from '../../types';

export interface WordCloudOptions extends ChartOptions {
  hoverColor?: string;
  minFontSize?: number;
  maxFontSize?: number;
}

export type WordCloudData = string[] | { key: string; value: number }[] | { [key: string]: number };

export type WordCloudTooltipContext = TooltipItem<'wordCloud'> & { parsed: { y: number | null } };
