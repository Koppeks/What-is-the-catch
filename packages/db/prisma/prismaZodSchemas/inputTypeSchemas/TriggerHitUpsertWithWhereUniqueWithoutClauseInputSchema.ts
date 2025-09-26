import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TriggerHitWhereUniqueInputSchema } from './TriggerHitWhereUniqueInputSchema';
import { TriggerHitUpdateWithoutClauseInputSchema } from './TriggerHitUpdateWithoutClauseInputSchema';
import { TriggerHitUncheckedUpdateWithoutClauseInputSchema } from './TriggerHitUncheckedUpdateWithoutClauseInputSchema';
import { TriggerHitCreateWithoutClauseInputSchema } from './TriggerHitCreateWithoutClauseInputSchema';
import { TriggerHitUncheckedCreateWithoutClauseInputSchema } from './TriggerHitUncheckedCreateWithoutClauseInputSchema';

export const TriggerHitUpsertWithWhereUniqueWithoutClauseInputSchema: z.ZodType<Prisma.TriggerHitUpsertWithWhereUniqueWithoutClauseInput> = z.object({
  where: z.lazy(() => TriggerHitWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TriggerHitUpdateWithoutClauseInputSchema),z.lazy(() => TriggerHitUncheckedUpdateWithoutClauseInputSchema) ]),
  create: z.union([ z.lazy(() => TriggerHitCreateWithoutClauseInputSchema),z.lazy(() => TriggerHitUncheckedCreateWithoutClauseInputSchema) ]),
}).strict() as z.ZodType<Prisma.TriggerHitUpsertWithWhereUniqueWithoutClauseInput>;

export default TriggerHitUpsertWithWhereUniqueWithoutClauseInputSchema;
