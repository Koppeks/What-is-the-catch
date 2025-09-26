import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TriggerCreateWithoutMergedIntoInputSchema } from './TriggerCreateWithoutMergedIntoInputSchema';
import { TriggerUncheckedCreateWithoutMergedIntoInputSchema } from './TriggerUncheckedCreateWithoutMergedIntoInputSchema';
import { TriggerCreateOrConnectWithoutMergedIntoInputSchema } from './TriggerCreateOrConnectWithoutMergedIntoInputSchema';
import { TriggerCreateManyMergedIntoInputEnvelopeSchema } from './TriggerCreateManyMergedIntoInputEnvelopeSchema';
import { TriggerWhereUniqueInputSchema } from './TriggerWhereUniqueInputSchema';

export const TriggerCreateNestedManyWithoutMergedIntoInputSchema: z.ZodType<Prisma.TriggerCreateNestedManyWithoutMergedIntoInput> = z.object({
  create: z.union([ z.lazy(() => TriggerCreateWithoutMergedIntoInputSchema),z.lazy(() => TriggerCreateWithoutMergedIntoInputSchema).array(),z.lazy(() => TriggerUncheckedCreateWithoutMergedIntoInputSchema),z.lazy(() => TriggerUncheckedCreateWithoutMergedIntoInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TriggerCreateOrConnectWithoutMergedIntoInputSchema),z.lazy(() => TriggerCreateOrConnectWithoutMergedIntoInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TriggerCreateManyMergedIntoInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TriggerWhereUniqueInputSchema),z.lazy(() => TriggerWhereUniqueInputSchema).array() ]).optional(),
}).strict() as z.ZodType<Prisma.TriggerCreateNestedManyWithoutMergedIntoInput>;

export default TriggerCreateNestedManyWithoutMergedIntoInputSchema;
