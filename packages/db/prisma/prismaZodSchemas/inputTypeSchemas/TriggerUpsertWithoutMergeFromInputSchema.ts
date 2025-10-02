import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TriggerUpdateWithoutMergeFromInputSchema } from './TriggerUpdateWithoutMergeFromInputSchema';
import { TriggerUncheckedUpdateWithoutMergeFromInputSchema } from './TriggerUncheckedUpdateWithoutMergeFromInputSchema';
import { TriggerCreateWithoutMergeFromInputSchema } from './TriggerCreateWithoutMergeFromInputSchema';
import { TriggerUncheckedCreateWithoutMergeFromInputSchema } from './TriggerUncheckedCreateWithoutMergeFromInputSchema';
import { TriggerWhereInputSchema } from './TriggerWhereInputSchema';

export const TriggerUpsertWithoutMergeFromInputSchema: z.ZodType<Prisma.TriggerUpsertWithoutMergeFromInput> = z.strictObject({
  update: z.union([ z.lazy(() => TriggerUpdateWithoutMergeFromInputSchema), z.lazy(() => TriggerUncheckedUpdateWithoutMergeFromInputSchema) ]),
  create: z.union([ z.lazy(() => TriggerCreateWithoutMergeFromInputSchema), z.lazy(() => TriggerUncheckedCreateWithoutMergeFromInputSchema) ]),
  where: z.lazy(() => TriggerWhereInputSchema).optional(),
});

export default TriggerUpsertWithoutMergeFromInputSchema;
