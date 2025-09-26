import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TriggerHitWhereUniqueInputSchema } from './TriggerHitWhereUniqueInputSchema';
import { TriggerHitUpdateWithoutClauseInputSchema } from './TriggerHitUpdateWithoutClauseInputSchema';
import { TriggerHitUncheckedUpdateWithoutClauseInputSchema } from './TriggerHitUncheckedUpdateWithoutClauseInputSchema';

export const TriggerHitUpdateWithWhereUniqueWithoutClauseInputSchema: z.ZodType<Prisma.TriggerHitUpdateWithWhereUniqueWithoutClauseInput> = z.object({
  where: z.lazy(() => TriggerHitWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TriggerHitUpdateWithoutClauseInputSchema),z.lazy(() => TriggerHitUncheckedUpdateWithoutClauseInputSchema) ]),
}).strict() as z.ZodType<Prisma.TriggerHitUpdateWithWhereUniqueWithoutClauseInput>;

export default TriggerHitUpdateWithWhereUniqueWithoutClauseInputSchema;
