import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TriggerCreateWithoutClauseCategoryInputSchema } from './TriggerCreateWithoutClauseCategoryInputSchema';
import { TriggerUncheckedCreateWithoutClauseCategoryInputSchema } from './TriggerUncheckedCreateWithoutClauseCategoryInputSchema';
import { TriggerCreateOrConnectWithoutClauseCategoryInputSchema } from './TriggerCreateOrConnectWithoutClauseCategoryInputSchema';
import { TriggerCreateManyClauseCategoryInputEnvelopeSchema } from './TriggerCreateManyClauseCategoryInputEnvelopeSchema';
import { TriggerWhereUniqueInputSchema } from './TriggerWhereUniqueInputSchema';

export const TriggerCreateNestedManyWithoutClauseCategoryInputSchema: z.ZodType<Prisma.TriggerCreateNestedManyWithoutClauseCategoryInput> = z.strictObject({
  create: z.union([ z.lazy(() => TriggerCreateWithoutClauseCategoryInputSchema), z.lazy(() => TriggerCreateWithoutClauseCategoryInputSchema).array(), z.lazy(() => TriggerUncheckedCreateWithoutClauseCategoryInputSchema), z.lazy(() => TriggerUncheckedCreateWithoutClauseCategoryInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TriggerCreateOrConnectWithoutClauseCategoryInputSchema), z.lazy(() => TriggerCreateOrConnectWithoutClauseCategoryInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TriggerCreateManyClauseCategoryInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TriggerWhereUniqueInputSchema), z.lazy(() => TriggerWhereUniqueInputSchema).array() ]).optional(),
});

export default TriggerCreateNestedManyWithoutClauseCategoryInputSchema;
