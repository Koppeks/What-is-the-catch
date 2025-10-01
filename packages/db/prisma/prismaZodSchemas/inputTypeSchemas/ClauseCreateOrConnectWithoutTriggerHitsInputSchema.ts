import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ClauseWhereUniqueInputSchema } from './ClauseWhereUniqueInputSchema';
import { ClauseCreateWithoutTriggerHitsInputSchema } from './ClauseCreateWithoutTriggerHitsInputSchema';
import { ClauseUncheckedCreateWithoutTriggerHitsInputSchema } from './ClauseUncheckedCreateWithoutTriggerHitsInputSchema';

export const ClauseCreateOrConnectWithoutTriggerHitsInputSchema: z.ZodType<Prisma.ClauseCreateOrConnectWithoutTriggerHitsInput> = z.object({
  where: z.lazy(() => ClauseWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ClauseCreateWithoutTriggerHitsInputSchema),z.lazy(() => ClauseUncheckedCreateWithoutTriggerHitsInputSchema) ]),
}).strict() as z.ZodType<Prisma.ClauseCreateOrConnectWithoutTriggerHitsInput>;

export default ClauseCreateOrConnectWithoutTriggerHitsInputSchema;
