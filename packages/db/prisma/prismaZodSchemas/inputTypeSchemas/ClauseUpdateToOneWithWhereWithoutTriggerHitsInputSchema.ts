import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ClauseWhereInputSchema } from './ClauseWhereInputSchema';
import { ClauseUpdateWithoutTriggerHitsInputSchema } from './ClauseUpdateWithoutTriggerHitsInputSchema';
import { ClauseUncheckedUpdateWithoutTriggerHitsInputSchema } from './ClauseUncheckedUpdateWithoutTriggerHitsInputSchema';

export const ClauseUpdateToOneWithWhereWithoutTriggerHitsInputSchema: z.ZodType<Prisma.ClauseUpdateToOneWithWhereWithoutTriggerHitsInput> = z.object({
  where: z.lazy(() => ClauseWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ClauseUpdateWithoutTriggerHitsInputSchema),z.lazy(() => ClauseUncheckedUpdateWithoutTriggerHitsInputSchema) ]),
}).strict() as z.ZodType<Prisma.ClauseUpdateToOneWithWhereWithoutTriggerHitsInput>;

export default ClauseUpdateToOneWithWhereWithoutTriggerHitsInputSchema;
