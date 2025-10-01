import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ClauseUpdateWithoutChildrenInputSchema } from './ClauseUpdateWithoutChildrenInputSchema';
import { ClauseUncheckedUpdateWithoutChildrenInputSchema } from './ClauseUncheckedUpdateWithoutChildrenInputSchema';
import { ClauseCreateWithoutChildrenInputSchema } from './ClauseCreateWithoutChildrenInputSchema';
import { ClauseUncheckedCreateWithoutChildrenInputSchema } from './ClauseUncheckedCreateWithoutChildrenInputSchema';
import { ClauseWhereInputSchema } from './ClauseWhereInputSchema';

export const ClauseUpsertWithoutChildrenInputSchema: z.ZodType<Prisma.ClauseUpsertWithoutChildrenInput> = z.object({
  update: z.union([ z.lazy(() => ClauseUpdateWithoutChildrenInputSchema),z.lazy(() => ClauseUncheckedUpdateWithoutChildrenInputSchema) ]),
  create: z.union([ z.lazy(() => ClauseCreateWithoutChildrenInputSchema),z.lazy(() => ClauseUncheckedCreateWithoutChildrenInputSchema) ]),
  where: z.lazy(() => ClauseWhereInputSchema).optional()
}).strict() as z.ZodType<Prisma.ClauseUpsertWithoutChildrenInput>;

export default ClauseUpsertWithoutChildrenInputSchema;
