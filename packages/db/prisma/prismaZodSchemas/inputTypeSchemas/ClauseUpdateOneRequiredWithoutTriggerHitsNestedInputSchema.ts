import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ClauseCreateWithoutTriggerHitsInputSchema } from './ClauseCreateWithoutTriggerHitsInputSchema';
import { ClauseUncheckedCreateWithoutTriggerHitsInputSchema } from './ClauseUncheckedCreateWithoutTriggerHitsInputSchema';
import { ClauseCreateOrConnectWithoutTriggerHitsInputSchema } from './ClauseCreateOrConnectWithoutTriggerHitsInputSchema';
import { ClauseUpsertWithoutTriggerHitsInputSchema } from './ClauseUpsertWithoutTriggerHitsInputSchema';
import { ClauseWhereUniqueInputSchema } from './ClauseWhereUniqueInputSchema';
import { ClauseUpdateToOneWithWhereWithoutTriggerHitsInputSchema } from './ClauseUpdateToOneWithWhereWithoutTriggerHitsInputSchema';
import { ClauseUpdateWithoutTriggerHitsInputSchema } from './ClauseUpdateWithoutTriggerHitsInputSchema';
import { ClauseUncheckedUpdateWithoutTriggerHitsInputSchema } from './ClauseUncheckedUpdateWithoutTriggerHitsInputSchema';

export const ClauseUpdateOneRequiredWithoutTriggerHitsNestedInputSchema: z.ZodType<Prisma.ClauseUpdateOneRequiredWithoutTriggerHitsNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => ClauseCreateWithoutTriggerHitsInputSchema), z.lazy(() => ClauseUncheckedCreateWithoutTriggerHitsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ClauseCreateOrConnectWithoutTriggerHitsInputSchema).optional(),
  upsert: z.lazy(() => ClauseUpsertWithoutTriggerHitsInputSchema).optional(),
  connect: z.lazy(() => ClauseWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ClauseUpdateToOneWithWhereWithoutTriggerHitsInputSchema), z.lazy(() => ClauseUpdateWithoutTriggerHitsInputSchema), z.lazy(() => ClauseUncheckedUpdateWithoutTriggerHitsInputSchema) ]).optional(),
});

export default ClauseUpdateOneRequiredWithoutTriggerHitsNestedInputSchema;
