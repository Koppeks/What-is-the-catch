import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TriggerHitWhereUniqueInputSchema } from './TriggerHitWhereUniqueInputSchema';
import { TriggerHitCreateWithoutTriggerInputSchema } from './TriggerHitCreateWithoutTriggerInputSchema';
import { TriggerHitUncheckedCreateWithoutTriggerInputSchema } from './TriggerHitUncheckedCreateWithoutTriggerInputSchema';

export const TriggerHitCreateOrConnectWithoutTriggerInputSchema: z.ZodType<Prisma.TriggerHitCreateOrConnectWithoutTriggerInput> = z.object({
  where: z.lazy(() => TriggerHitWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TriggerHitCreateWithoutTriggerInputSchema),z.lazy(() => TriggerHitUncheckedCreateWithoutTriggerInputSchema) ]),
}).strict() as z.ZodType<Prisma.TriggerHitCreateOrConnectWithoutTriggerInput>;

export default TriggerHitCreateOrConnectWithoutTriggerInputSchema;
