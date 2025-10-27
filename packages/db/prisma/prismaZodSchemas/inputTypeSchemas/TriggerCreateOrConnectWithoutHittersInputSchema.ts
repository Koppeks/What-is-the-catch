import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TriggerWhereUniqueInputSchema } from './TriggerWhereUniqueInputSchema';
import { TriggerCreateWithoutHittersInputSchema } from './TriggerCreateWithoutHittersInputSchema';
import { TriggerUncheckedCreateWithoutHittersInputSchema } from './TriggerUncheckedCreateWithoutHittersInputSchema';

export const TriggerCreateOrConnectWithoutHittersInputSchema: z.ZodType<Prisma.TriggerCreateOrConnectWithoutHittersInput> = z.strictObject({
  where: z.lazy(() => TriggerWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TriggerCreateWithoutHittersInputSchema), z.lazy(() => TriggerUncheckedCreateWithoutHittersInputSchema) ]),
});

export default TriggerCreateOrConnectWithoutHittersInputSchema;
