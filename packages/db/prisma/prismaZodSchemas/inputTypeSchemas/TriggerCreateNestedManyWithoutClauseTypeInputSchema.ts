import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TriggerCreateWithoutClauseTypeInputSchema } from './TriggerCreateWithoutClauseTypeInputSchema';
import { TriggerUncheckedCreateWithoutClauseTypeInputSchema } from './TriggerUncheckedCreateWithoutClauseTypeInputSchema';
import { TriggerCreateOrConnectWithoutClauseTypeInputSchema } from './TriggerCreateOrConnectWithoutClauseTypeInputSchema';
import { TriggerCreateManyClauseTypeInputEnvelopeSchema } from './TriggerCreateManyClauseTypeInputEnvelopeSchema';
import { TriggerWhereUniqueInputSchema } from './TriggerWhereUniqueInputSchema';

export const TriggerCreateNestedManyWithoutClauseTypeInputSchema: z.ZodType<Prisma.TriggerCreateNestedManyWithoutClauseTypeInput> = z.object({
  create: z.union([ z.lazy(() => TriggerCreateWithoutClauseTypeInputSchema),z.lazy(() => TriggerCreateWithoutClauseTypeInputSchema).array(),z.lazy(() => TriggerUncheckedCreateWithoutClauseTypeInputSchema),z.lazy(() => TriggerUncheckedCreateWithoutClauseTypeInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TriggerCreateOrConnectWithoutClauseTypeInputSchema),z.lazy(() => TriggerCreateOrConnectWithoutClauseTypeInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TriggerCreateManyClauseTypeInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TriggerWhereUniqueInputSchema),z.lazy(() => TriggerWhereUniqueInputSchema).array() ]).optional(),
}).strict() as z.ZodType<Prisma.TriggerCreateNestedManyWithoutClauseTypeInput>;

export default TriggerCreateNestedManyWithoutClauseTypeInputSchema;
