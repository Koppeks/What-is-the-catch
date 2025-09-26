import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ClauseWhereInputSchema } from './ClauseWhereInputSchema';
import { ClauseUpdateWithoutHitsInputSchema } from './ClauseUpdateWithoutHitsInputSchema';
import { ClauseUncheckedUpdateWithoutHitsInputSchema } from './ClauseUncheckedUpdateWithoutHitsInputSchema';

export const ClauseUpdateToOneWithWhereWithoutHitsInputSchema: z.ZodType<Prisma.ClauseUpdateToOneWithWhereWithoutHitsInput> = z.object({
  where: z.lazy(() => ClauseWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ClauseUpdateWithoutHitsInputSchema),z.lazy(() => ClauseUncheckedUpdateWithoutHitsInputSchema) ]),
}).strict() as z.ZodType<Prisma.ClauseUpdateToOneWithWhereWithoutHitsInput>;

export default ClauseUpdateToOneWithWhereWithoutHitsInputSchema;
