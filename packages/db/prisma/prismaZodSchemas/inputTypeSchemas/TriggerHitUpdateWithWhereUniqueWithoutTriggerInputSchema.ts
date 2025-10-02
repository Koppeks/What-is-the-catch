import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TriggerHitWhereUniqueInputSchema } from './TriggerHitWhereUniqueInputSchema';
import { TriggerHitUpdateWithoutTriggerInputSchema } from './TriggerHitUpdateWithoutTriggerInputSchema';
import { TriggerHitUncheckedUpdateWithoutTriggerInputSchema } from './TriggerHitUncheckedUpdateWithoutTriggerInputSchema';

export const TriggerHitUpdateWithWhereUniqueWithoutTriggerInputSchema: z.ZodType<Prisma.TriggerHitUpdateWithWhereUniqueWithoutTriggerInput> = z.strictObject({
  where: z.lazy(() => TriggerHitWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TriggerHitUpdateWithoutTriggerInputSchema), z.lazy(() => TriggerHitUncheckedUpdateWithoutTriggerInputSchema) ]),
});

export default TriggerHitUpdateWithWhereUniqueWithoutTriggerInputSchema;
