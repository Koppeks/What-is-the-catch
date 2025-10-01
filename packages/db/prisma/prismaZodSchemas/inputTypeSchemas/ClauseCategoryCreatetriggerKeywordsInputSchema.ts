import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const ClauseCategoryCreatetriggerKeywordsInputSchema: z.ZodType<Prisma.ClauseCategoryCreatetriggerKeywordsInput> = z.object({
  set: z.string().array()
}).strict() as z.ZodType<Prisma.ClauseCategoryCreatetriggerKeywordsInput>;

export default ClauseCategoryCreatetriggerKeywordsInputSchema;
