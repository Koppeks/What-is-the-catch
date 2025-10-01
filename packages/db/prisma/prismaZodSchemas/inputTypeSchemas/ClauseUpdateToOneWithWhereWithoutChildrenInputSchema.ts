import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ClauseWhereInputSchema } from './ClauseWhereInputSchema';
import { ClauseUpdateWithoutChildrenInputSchema } from './ClauseUpdateWithoutChildrenInputSchema';
import { ClauseUncheckedUpdateWithoutChildrenInputSchema } from './ClauseUncheckedUpdateWithoutChildrenInputSchema';

export const ClauseUpdateToOneWithWhereWithoutChildrenInputSchema: z.ZodType<Prisma.ClauseUpdateToOneWithWhereWithoutChildrenInput> = z.object({
  where: z.lazy(() => ClauseWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ClauseUpdateWithoutChildrenInputSchema),z.lazy(() => ClauseUncheckedUpdateWithoutChildrenInputSchema) ]),
}).strict() as z.ZodType<Prisma.ClauseUpdateToOneWithWhereWithoutChildrenInput>;

export default ClauseUpdateToOneWithWhereWithoutChildrenInputSchema;
