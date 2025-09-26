import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const ClauseTypeCreatetriggerKeywordsInputSchema: z.ZodType<Prisma.ClauseTypeCreatetriggerKeywordsInput> = z.object({
  set: z.string().array()
}).strict() as z.ZodType<Prisma.ClauseTypeCreatetriggerKeywordsInput>;

export default ClauseTypeCreatetriggerKeywordsInputSchema;
