import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TriggerCreateWithoutMergeFromInputSchema } from './TriggerCreateWithoutMergeFromInputSchema';
import { TriggerUncheckedCreateWithoutMergeFromInputSchema } from './TriggerUncheckedCreateWithoutMergeFromInputSchema';
import { TriggerCreateOrConnectWithoutMergeFromInputSchema } from './TriggerCreateOrConnectWithoutMergeFromInputSchema';
import { TriggerUpsertWithoutMergeFromInputSchema } from './TriggerUpsertWithoutMergeFromInputSchema';
import { TriggerWhereInputSchema } from './TriggerWhereInputSchema';
import { TriggerWhereUniqueInputSchema } from './TriggerWhereUniqueInputSchema';
import { TriggerUpdateToOneWithWhereWithoutMergeFromInputSchema } from './TriggerUpdateToOneWithWhereWithoutMergeFromInputSchema';
import { TriggerUpdateWithoutMergeFromInputSchema } from './TriggerUpdateWithoutMergeFromInputSchema';
import { TriggerUncheckedUpdateWithoutMergeFromInputSchema } from './TriggerUncheckedUpdateWithoutMergeFromInputSchema';

export const TriggerUpdateOneWithoutMergeFromNestedInputSchema: z.ZodType<Prisma.TriggerUpdateOneWithoutMergeFromNestedInput> = z.object({
  create: z.union([ z.lazy(() => TriggerCreateWithoutMergeFromInputSchema),z.lazy(() => TriggerUncheckedCreateWithoutMergeFromInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TriggerCreateOrConnectWithoutMergeFromInputSchema).optional(),
  upsert: z.lazy(() => TriggerUpsertWithoutMergeFromInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => TriggerWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => TriggerWhereInputSchema) ]).optional(),
  connect: z.lazy(() => TriggerWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => TriggerUpdateToOneWithWhereWithoutMergeFromInputSchema),z.lazy(() => TriggerUpdateWithoutMergeFromInputSchema),z.lazy(() => TriggerUncheckedUpdateWithoutMergeFromInputSchema) ]).optional(),
}).strict() as z.ZodType<Prisma.TriggerUpdateOneWithoutMergeFromNestedInput>;

export default TriggerUpdateOneWithoutMergeFromNestedInputSchema;
