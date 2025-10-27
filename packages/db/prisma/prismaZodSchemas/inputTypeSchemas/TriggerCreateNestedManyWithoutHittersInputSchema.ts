import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TriggerCreateWithoutHittersInputSchema } from './TriggerCreateWithoutHittersInputSchema';
import { TriggerUncheckedCreateWithoutHittersInputSchema } from './TriggerUncheckedCreateWithoutHittersInputSchema';
import { TriggerCreateOrConnectWithoutHittersInputSchema } from './TriggerCreateOrConnectWithoutHittersInputSchema';
import { TriggerCreateManyHittersInputEnvelopeSchema } from './TriggerCreateManyHittersInputEnvelopeSchema';
import { TriggerWhereUniqueInputSchema } from './TriggerWhereUniqueInputSchema';

export const TriggerCreateNestedManyWithoutHittersInputSchema: z.ZodType<Prisma.TriggerCreateNestedManyWithoutHittersInput> = z.strictObject({
  create: z.union([ z.lazy(() => TriggerCreateWithoutHittersInputSchema), z.lazy(() => TriggerCreateWithoutHittersInputSchema).array(), z.lazy(() => TriggerUncheckedCreateWithoutHittersInputSchema), z.lazy(() => TriggerUncheckedCreateWithoutHittersInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TriggerCreateOrConnectWithoutHittersInputSchema), z.lazy(() => TriggerCreateOrConnectWithoutHittersInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TriggerCreateManyHittersInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TriggerWhereUniqueInputSchema), z.lazy(() => TriggerWhereUniqueInputSchema).array() ]).optional(),
});

export default TriggerCreateNestedManyWithoutHittersInputSchema;
