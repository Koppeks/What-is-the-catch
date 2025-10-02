import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TriggerCreateWithoutMergeFromInputSchema } from './TriggerCreateWithoutMergeFromInputSchema';
import { TriggerUncheckedCreateWithoutMergeFromInputSchema } from './TriggerUncheckedCreateWithoutMergeFromInputSchema';
import { TriggerCreateOrConnectWithoutMergeFromInputSchema } from './TriggerCreateOrConnectWithoutMergeFromInputSchema';
import { TriggerWhereUniqueInputSchema } from './TriggerWhereUniqueInputSchema';

export const TriggerCreateNestedOneWithoutMergeFromInputSchema: z.ZodType<Prisma.TriggerCreateNestedOneWithoutMergeFromInput> = z.strictObject({
  create: z.union([ z.lazy(() => TriggerCreateWithoutMergeFromInputSchema), z.lazy(() => TriggerUncheckedCreateWithoutMergeFromInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TriggerCreateOrConnectWithoutMergeFromInputSchema).optional(),
  connect: z.lazy(() => TriggerWhereUniqueInputSchema).optional(),
});

export default TriggerCreateNestedOneWithoutMergeFromInputSchema;
