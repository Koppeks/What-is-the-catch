import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TriggerWhereUniqueInputSchema } from './TriggerWhereUniqueInputSchema';
import { TriggerUpdateWithoutHittersInputSchema } from './TriggerUpdateWithoutHittersInputSchema';
import { TriggerUncheckedUpdateWithoutHittersInputSchema } from './TriggerUncheckedUpdateWithoutHittersInputSchema';
import { TriggerCreateWithoutHittersInputSchema } from './TriggerCreateWithoutHittersInputSchema';
import { TriggerUncheckedCreateWithoutHittersInputSchema } from './TriggerUncheckedCreateWithoutHittersInputSchema';

export const TriggerUpsertWithWhereUniqueWithoutHittersInputSchema: z.ZodType<Prisma.TriggerUpsertWithWhereUniqueWithoutHittersInput> = z.strictObject({
  where: z.lazy(() => TriggerWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TriggerUpdateWithoutHittersInputSchema), z.lazy(() => TriggerUncheckedUpdateWithoutHittersInputSchema) ]),
  create: z.union([ z.lazy(() => TriggerCreateWithoutHittersInputSchema), z.lazy(() => TriggerUncheckedCreateWithoutHittersInputSchema) ]),
});

export default TriggerUpsertWithWhereUniqueWithoutHittersInputSchema;
