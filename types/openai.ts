import { OPENAI_API_TYPE } from '../utils/app/const';

export interface OpenAIModel {
  id: string;
  name: string;
  maxLength: number; // maximum length of a message
  tokenLimit: number;
}

export enum OpenAIModelID {
  GPT_3_5 = 'gpt-3.5-turbo',
  GPT_3_5_16K = 'gpt-3.5-turbo-16k',
  GPT_3_5_instruct = 'gpt-3.5-turbo-instruct',
  GPT_3_5_AZ = 'gpt-35-turbo',
  GPT_4 = 'gpt-4',
  GPT_4_32K = 'gpt-4-32k',
  GPT_4_128K = 'gpt-4-0125-preview',
  GPT_3_5_16K_1106 = 'gpt-3.5-turbo-1106',
  GPT_B8MgChTQ = 'ft:gpt-4o-mini-2024-07-18:cocosoft-technology-pte-ltd::B8MgChTQ',
  GPT_B8NmQ5OW = 'ft:gpt-4o-mini-2024-07-18:cocosoft-technology-pte-ltd::B8NmQ5OW',
}

// in case the `DEFAULT_MODEL` environment variable is not set or set to an unsupported model
export const fallbackModelID = OpenAIModelID.GPT_3_5;

export const OpenAIModels: Record<OpenAIModelID, OpenAIModel> = {
 [OpenAIModelID.GPT_4_128K]: {
    id: OpenAIModelID.GPT_4_128K,
    name: 'GPT-4-turbo-128k-0125-preview(knowledge 2023.12)',
    maxLength: 500000,
    tokenLimit: 4096,
  },
 [OpenAIModelID.GPT_3_5_16K_1106]: {
    id: OpenAIModelID.GPT_3_5_16K_1106,
    name: 'gpt-3.5-turbo-1106',
    maxLength: 48000,
    tokenLimit: 16000,
  },
  
  [OpenAIModelID.GPT_3_5]: {
    id: OpenAIModelID.GPT_3_5,
    name: 'GPT-3.5',
    maxLength: 12000,
    tokenLimit: 4000,
  },
  [OpenAIModelID.GPT_3_5_16K]: {
    id: OpenAIModelID.GPT_3_5_16K,
    name: 'GPT-3.5-16K',
    maxLength: 48000,
    tokenLimit: 16000,
  },
  [OpenAIModelID.GPT_3_5_instruct]: {
    id: OpenAIModelID.GPT_3_5_instruct,
    name: 'GPT-3.5-struct',
    maxLength: 12000,
    tokenLimit: 4000,
  },
  [OpenAIModelID.GPT_3_5_AZ]: {
    id: OpenAIModelID.GPT_3_5_AZ,
    name: 'GPT-3.5',
    maxLength: 12000,
    tokenLimit: 4000,
  },
  [OpenAIModelID.GPT_4]: {
    id: OpenAIModelID.GPT_4,
    name: 'GPT-4',
    maxLength: 24000,
    tokenLimit: 8000,
  },
  [OpenAIModelID.GPT_4_32K]: {
    id: OpenAIModelID.GPT_4_32K,
    name: 'GPT-4-32K',
    maxLength: 96000,
    tokenLimit: 32000,
  },
  [OpenAIModelID.GPT_B8MgChTQ]: {
    id: OpenAIModelID.GPT_B8MgChTQ,
    name: 'GPT_B8MgChTQ',
    maxLength: 96000,
    tokenLimit: 96000,
  },
  [OpenAIModelID.GPT_B8NmQ5OW]: {
    id: OpenAIModelID.GPT_B8NmQ5OW,
    name: 'GPT_B8NmQ5OW',
    maxLength: 96000,
    tokenLimit: 96000,
  },
};
