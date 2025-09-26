import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TriggerScalarWhereInputSchema } from './TriggerScalarWhereInputSchema';
import { TriggerUpdateManyMutationInputSchema } from './TriggerUpdateManyMutationInputSchema';
import { TriggerUncheckedUpdateManyWithoutMergedIntoInputSchema } from './TriggerUncheckedUpdateManyWithoutMergedIntoInputSchema';

export const TriggerUpdateManyWithWhereWithoutMergedIntoInputSchema: z.ZodType<Prisma.TriggerUpdateManyWithWhereWithoutMergedIntoInput> = z.object({
  where: z.lazy(() => TriggerScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TriggerUpdateManyMutationInputSchema),z.lazy(() => TriggerUncheckedUpdateManyWithoutMergedIntoInputSchema) ]),
}).strict() as z.ZodType<Prisma.TriggerUpdateManyWithWhereWithoutMergedIntoInput>;

export default TriggerUpdateManyWithWhereWithoutMergedIntoInputSchema;
