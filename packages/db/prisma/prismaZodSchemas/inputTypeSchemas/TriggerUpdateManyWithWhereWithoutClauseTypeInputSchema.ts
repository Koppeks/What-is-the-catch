import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TriggerScalarWhereInputSchema } from './TriggerScalarWhereInputSchema';
import { TriggerUpdateManyMutationInputSchema } from './TriggerUpdateManyMutationInputSchema';
import { TriggerUncheckedUpdateManyWithoutClauseTypeInputSchema } from './TriggerUncheckedUpdateManyWithoutClauseTypeInputSchema';

export const TriggerUpdateManyWithWhereWithoutClauseTypeInputSchema: z.ZodType<Prisma.TriggerUpdateManyWithWhereWithoutClauseTypeInput> = z.object({
  where: z.lazy(() => TriggerScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TriggerUpdateManyMutationInputSchema),z.lazy(() => TriggerUncheckedUpdateManyWithoutClauseTypeInputSchema) ]),
}).strict() as z.ZodType<Prisma.TriggerUpdateManyWithWhereWithoutClauseTypeInput>;

export default TriggerUpdateManyWithWhereWithoutClauseTypeInputSchema;
