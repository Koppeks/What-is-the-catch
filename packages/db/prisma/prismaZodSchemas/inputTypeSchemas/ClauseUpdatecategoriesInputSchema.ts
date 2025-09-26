import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const ClauseUpdatecategoriesInputSchema: z.ZodType<Prisma.ClauseUpdatecategoriesInput> = z.object({
  set: z.string().array().optional(),
  push: z.union([ z.string(),z.string().array() ]).optional(),
}).strict() as z.ZodType<Prisma.ClauseUpdatecategoriesInput>;

export default ClauseUpdatecategoriesInputSchema;
