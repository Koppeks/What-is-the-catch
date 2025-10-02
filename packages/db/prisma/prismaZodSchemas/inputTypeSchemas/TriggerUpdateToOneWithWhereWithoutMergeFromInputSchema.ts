import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TriggerWhereInputSchema } from './TriggerWhereInputSchema';
import { TriggerUpdateWithoutMergeFromInputSchema } from './TriggerUpdateWithoutMergeFromInputSchema';
import { TriggerUncheckedUpdateWithoutMergeFromInputSchema } from './TriggerUncheckedUpdateWithoutMergeFromInputSchema';

export const TriggerUpdateToOneWithWhereWithoutMergeFromInputSchema: z.ZodType<Prisma.TriggerUpdateToOneWithWhereWithoutMergeFromInput> = z.strictObject({
  where: z.lazy(() => TriggerWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => TriggerUpdateWithoutMergeFromInputSchema), z.lazy(() => TriggerUncheckedUpdateWithoutMergeFromInputSchema) ]),
});

export default TriggerUpdateToOneWithWhereWithoutMergeFromInputSchema;
