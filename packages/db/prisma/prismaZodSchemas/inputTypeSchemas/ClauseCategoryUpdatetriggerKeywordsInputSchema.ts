import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const ClauseCategoryUpdatetriggerKeywordsInputSchema: z.ZodType<Prisma.ClauseCategoryUpdatetriggerKeywordsInput> = z.object({
  set: z.string().array().optional(),
  push: z.union([ z.string(),z.string().array() ]).optional(),
}).strict() as z.ZodType<Prisma.ClauseCategoryUpdatetriggerKeywordsInput>;

export default ClauseCategoryUpdatetriggerKeywordsInputSchema;
