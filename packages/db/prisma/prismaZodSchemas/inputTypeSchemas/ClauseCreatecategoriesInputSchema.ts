import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const ClauseCreatecategoriesInputSchema: z.ZodType<Prisma.ClauseCreatecategoriesInput> = z.object({
  set: z.string().array()
}).strict() as z.ZodType<Prisma.ClauseCreatecategoriesInput>;

export default ClauseCreatecategoriesInputSchema;
