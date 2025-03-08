import { OPENAI_API_TYPE } from '../utils/app/const';

export interface OpenAIModel {
  id: string;
  name: string;
  maxLength: number; // maximum length of a message
  tokenLimit: number;
}

export enum OpenAIModelID {
  GPT_4O_MINI = 'gpt-4o-mini',
  GPT_B8MgChTQ = 'ft:gpt-4o-mini-2024-07-18:cocosoft-technology-pte-ltd::B8MgChTQ',
  GPT_B8NmQ5OW = 'ft:gpt-4o-mini-2024-07-18:cocosoft-technology-pte-ltd::B8NmQ5OW',
}

// in case the `DEFAULT_MODEL` environment variable is not set or set to an unsupported model
export const fallbackModelID = OpenAIModelID.GPT_4O_MINI;

export const OpenAIModels: Record<OpenAIModelID, OpenAIModel> = {

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
  [OpenAIModelID.GPT_B8NmQ5OW]: {
    id: OpenAIModelID.GPT_B8NmQ5OW,
    name: 'GPT_B8NmQ5OW',
    maxLength: 120000,
    tokenLimit: 16000,
  },
};
