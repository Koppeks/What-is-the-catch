import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TriggerWhereUniqueInputSchema } from './TriggerWhereUniqueInputSchema';
import { TriggerCreateWithoutMergeFromInputSchema } from './TriggerCreateWithoutMergeFromInputSchema';
import { TriggerUncheckedCreateWithoutMergeFromInputSchema } from './TriggerUncheckedCreateWithoutMergeFromInputSchema';

export const TriggerCreateOrConnectWithoutMergeFromInputSchema: z.ZodType<Prisma.TriggerCreateOrConnectWithoutMergeFromInput> = z.object({
  where: z.lazy(() => TriggerWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TriggerCreateWithoutMergeFromInputSchema),z.lazy(() => TriggerUncheckedCreateWithoutMergeFromInputSchema) ]),
}).strict() as z.ZodType<Prisma.TriggerCreateOrConnectWithoutMergeFromInput>;

export default TriggerCreateOrConnectWithoutMergeFromInputSchema;
