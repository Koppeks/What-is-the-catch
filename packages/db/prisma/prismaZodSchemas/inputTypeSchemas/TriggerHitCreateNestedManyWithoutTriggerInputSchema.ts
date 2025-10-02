import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TriggerHitCreateWithoutTriggerInputSchema } from './TriggerHitCreateWithoutTriggerInputSchema';
import { TriggerHitUncheckedCreateWithoutTriggerInputSchema } from './TriggerHitUncheckedCreateWithoutTriggerInputSchema';
import { TriggerHitCreateOrConnectWithoutTriggerInputSchema } from './TriggerHitCreateOrConnectWithoutTriggerInputSchema';
import { TriggerHitCreateManyTriggerInputEnvelopeSchema } from './TriggerHitCreateManyTriggerInputEnvelopeSchema';
import { TriggerHitWhereUniqueInputSchema } from './TriggerHitWhereUniqueInputSchema';

export const TriggerHitCreateNestedManyWithoutTriggerInputSchema: z.ZodType<Prisma.TriggerHitCreateNestedManyWithoutTriggerInput> = z.strictObject({
  create: z.union([ z.lazy(() => TriggerHitCreateWithoutTriggerInputSchema), z.lazy(() => TriggerHitCreateWithoutTriggerInputSchema).array(), z.lazy(() => TriggerHitUncheckedCreateWithoutTriggerInputSchema), z.lazy(() => TriggerHitUncheckedCreateWithoutTriggerInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TriggerHitCreateOrConnectWithoutTriggerInputSchema), z.lazy(() => TriggerHitCreateOrConnectWithoutTriggerInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TriggerHitCreateManyTriggerInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TriggerHitWhereUniqueInputSchema), z.lazy(() => TriggerHitWhereUniqueInputSchema).array() ]).optional(),
});

export default TriggerHitCreateNestedManyWithoutTriggerInputSchema;
