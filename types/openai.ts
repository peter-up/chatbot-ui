import { OPENAI_API_TYPE } from '../utils/app/const';

export interface OpenAIModel {
  id: string;
  name: string;
  maxLength: number; // maximum length of a message
  tokenLimit: number;
}

export enum OpenAIModelID {
  GPT_3_5 = 'gpt-3.5',
  GPT_4O_MINI = 'gpt-4o-mini',
  GPT_B8MgChTQ = 'ft:gpt-4o-mini-2024-07-18:cocosoft-technology-pte-ltd::B8MgChTQ',
  GPT_BCjeAQ2e = 'ft:gpt-4o-mini-2024-07-18:cocosoft-technology-pte-ltd::BCjeAQ2e',
  GPT_BEStpuKW = 'ft:gpt-4o-2024-08-06:cocosoft-technology-pte-ltd::BEStpuKW',
}

// in case the `DEFAULT_MODEL` environment variable is not set or set to an unsupported model
export const fallbackModelID = OpenAIModelID.GPT_4O_MINI;

export const OpenAIModels: Record<OpenAIModelID, OpenAIModel> = {
  [OpenAIModelID.GPT_3_5]: {
    id: OpenAIModelID.GPT_3_5,
    name: 'GPT-3.6',
    maxLength: 16000,
    tokenLimit: 16000,
  },
  [OpenAIModelID.GPT_4O_MINI]: {
    id: OpenAIModelID.GPT_4O_MINI,
    name: 'GPT-4o-mini',
    maxLength: 96000,
    tokenLimit: 32000,
  },
  [OpenAIModelID.GPT_B8MgChTQ]: {
    id: OpenAIModelID.GPT_B8MgChTQ,
    name: 'GPT_B8MgChTQ',
    maxLength: 120000,
    tokenLimit: 16000,
  },
  [OpenAIModelID.GPT_BCjeAQ2e]: {
    id: OpenAIModelID.GPT_BCjeAQ2e,
    name: 'GPT_BCjeAQ2e',
    maxLength: 120000,
    tokenLimit: 16000,
  },
  [OpenAIModelID.GPT_BEStpuKW]: {
    id: OpenAIModelID.GPT_BEStpuKW,
    name: 'GPT_BEStpuKW',
    maxLength: 120000,
    tokenLimit: 16000,
  },
};
