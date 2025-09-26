import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TriggerHitScalarWhereInputSchema } from './TriggerHitScalarWhereInputSchema';
import { TriggerHitUpdateManyMutationInputSchema } from './TriggerHitUpdateManyMutationInputSchema';
import { TriggerHitUncheckedUpdateManyWithoutClauseInputSchema } from './TriggerHitUncheckedUpdateManyWithoutClauseInputSchema';

export const TriggerHitUpdateManyWithWhereWithoutClauseInputSchema: z.ZodType<Prisma.TriggerHitUpdateManyWithWhereWithoutClauseInput> = z.object({
  where: z.lazy(() => TriggerHitScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TriggerHitUpdateManyMutationInputSchema),z.lazy(() => TriggerHitUncheckedUpdateManyWithoutClauseInputSchema) ]),
}).strict() as z.ZodType<Prisma.TriggerHitUpdateManyWithWhereWithoutClauseInput>;

export default TriggerHitUpdateManyWithWhereWithoutClauseInputSchema;
