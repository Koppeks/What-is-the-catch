import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TriggerScalarWhereInputSchema } from './TriggerScalarWhereInputSchema';
import { TriggerUpdateManyMutationInputSchema } from './TriggerUpdateManyMutationInputSchema';
import { TriggerUncheckedUpdateManyWithoutClauseCategoryInputSchema } from './TriggerUncheckedUpdateManyWithoutClauseCategoryInputSchema';

export const TriggerUpdateManyWithWhereWithoutClauseCategoryInputSchema: z.ZodType<Prisma.TriggerUpdateManyWithWhereWithoutClauseCategoryInput> = z.strictObject({
  where: z.lazy(() => TriggerScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TriggerUpdateManyMutationInputSchema), z.lazy(() => TriggerUncheckedUpdateManyWithoutClauseCategoryInputSchema) ]),
});

export default TriggerUpdateManyWithWhereWithoutClauseCategoryInputSchema;
