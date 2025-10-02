import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ClauseUpdateWithoutTriggerHitsInputSchema } from './ClauseUpdateWithoutTriggerHitsInputSchema';
import { ClauseUncheckedUpdateWithoutTriggerHitsInputSchema } from './ClauseUncheckedUpdateWithoutTriggerHitsInputSchema';
import { ClauseCreateWithoutTriggerHitsInputSchema } from './ClauseCreateWithoutTriggerHitsInputSchema';
import { ClauseUncheckedCreateWithoutTriggerHitsInputSchema } from './ClauseUncheckedCreateWithoutTriggerHitsInputSchema';
import { ClauseWhereInputSchema } from './ClauseWhereInputSchema';

export const ClauseUpsertWithoutTriggerHitsInputSchema: z.ZodType<Prisma.ClauseUpsertWithoutTriggerHitsInput> = z.strictObject({
  update: z.union([ z.lazy(() => ClauseUpdateWithoutTriggerHitsInputSchema), z.lazy(() => ClauseUncheckedUpdateWithoutTriggerHitsInputSchema) ]),
  create: z.union([ z.lazy(() => ClauseCreateWithoutTriggerHitsInputSchema), z.lazy(() => ClauseUncheckedCreateWithoutTriggerHitsInputSchema) ]),
  where: z.lazy(() => ClauseWhereInputSchema).optional(),
});

export default ClauseUpsertWithoutTriggerHitsInputSchema;
