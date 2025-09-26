import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const ClauseTypeUpdatetriggerKeywordsInputSchema: z.ZodType<Prisma.ClauseTypeUpdatetriggerKeywordsInput> = z.object({
  set: z.string().array().optional(),
  push: z.union([ z.string(),z.string().array() ]).optional(),
}).strict() as z.ZodType<Prisma.ClauseTypeUpdatetriggerKeywordsInput>;

export default ClauseTypeUpdatetriggerKeywordsInputSchema;
