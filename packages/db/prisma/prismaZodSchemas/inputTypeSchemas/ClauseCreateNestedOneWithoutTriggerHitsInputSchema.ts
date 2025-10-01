import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ClauseCreateWithoutTriggerHitsInputSchema } from './ClauseCreateWithoutTriggerHitsInputSchema';
import { ClauseUncheckedCreateWithoutTriggerHitsInputSchema } from './ClauseUncheckedCreateWithoutTriggerHitsInputSchema';
import { ClauseCreateOrConnectWithoutTriggerHitsInputSchema } from './ClauseCreateOrConnectWithoutTriggerHitsInputSchema';
import { ClauseWhereUniqueInputSchema } from './ClauseWhereUniqueInputSchema';

export const ClauseCreateNestedOneWithoutTriggerHitsInputSchema: z.ZodType<Prisma.ClauseCreateNestedOneWithoutTriggerHitsInput> = z.object({
  create: z.union([ z.lazy(() => ClauseCreateWithoutTriggerHitsInputSchema),z.lazy(() => ClauseUncheckedCreateWithoutTriggerHitsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ClauseCreateOrConnectWithoutTriggerHitsInputSchema).optional(),
  connect: z.lazy(() => ClauseWhereUniqueInputSchema).optional()
}).strict() as z.ZodType<Prisma.ClauseCreateNestedOneWithoutTriggerHitsInput>;

export default ClauseCreateNestedOneWithoutTriggerHitsInputSchema;
