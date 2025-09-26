import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TriggerHitWhereUniqueInputSchema } from './TriggerHitWhereUniqueInputSchema';
import { TriggerHitUpdateWithoutTriggerInputSchema } from './TriggerHitUpdateWithoutTriggerInputSchema';
import { TriggerHitUncheckedUpdateWithoutTriggerInputSchema } from './TriggerHitUncheckedUpdateWithoutTriggerInputSchema';
import { TriggerHitCreateWithoutTriggerInputSchema } from './TriggerHitCreateWithoutTriggerInputSchema';
import { TriggerHitUncheckedCreateWithoutTriggerInputSchema } from './TriggerHitUncheckedCreateWithoutTriggerInputSchema';

export const TriggerHitUpsertWithWhereUniqueWithoutTriggerInputSchema: z.ZodType<Prisma.TriggerHitUpsertWithWhereUniqueWithoutTriggerInput> = z.object({
  where: z.lazy(() => TriggerHitWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TriggerHitUpdateWithoutTriggerInputSchema),z.lazy(() => TriggerHitUncheckedUpdateWithoutTriggerInputSchema) ]),
  create: z.union([ z.lazy(() => TriggerHitCreateWithoutTriggerInputSchema),z.lazy(() => TriggerHitUncheckedCreateWithoutTriggerInputSchema) ]),
}).strict() as z.ZodType<Prisma.TriggerHitUpsertWithWhereUniqueWithoutTriggerInput>;

export default TriggerHitUpsertWithWhereUniqueWithoutTriggerInputSchema;
