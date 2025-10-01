import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TriggerCreateWithoutClauseCategoryInputSchema } from './TriggerCreateWithoutClauseCategoryInputSchema';
import { TriggerUncheckedCreateWithoutClauseCategoryInputSchema } from './TriggerUncheckedCreateWithoutClauseCategoryInputSchema';
import { TriggerCreateOrConnectWithoutClauseCategoryInputSchema } from './TriggerCreateOrConnectWithoutClauseCategoryInputSchema';
import { TriggerUpsertWithWhereUniqueWithoutClauseCategoryInputSchema } from './TriggerUpsertWithWhereUniqueWithoutClauseCategoryInputSchema';
import { TriggerCreateManyClauseCategoryInputEnvelopeSchema } from './TriggerCreateManyClauseCategoryInputEnvelopeSchema';
import { TriggerWhereUniqueInputSchema } from './TriggerWhereUniqueInputSchema';
import { TriggerUpdateWithWhereUniqueWithoutClauseCategoryInputSchema } from './TriggerUpdateWithWhereUniqueWithoutClauseCategoryInputSchema';
import { TriggerUpdateManyWithWhereWithoutClauseCategoryInputSchema } from './TriggerUpdateManyWithWhereWithoutClauseCategoryInputSchema';
import { TriggerScalarWhereInputSchema } from './TriggerScalarWhereInputSchema';

export const TriggerUpdateManyWithoutClauseCategoryNestedInputSchema: z.ZodType<Prisma.TriggerUpdateManyWithoutClauseCategoryNestedInput> = z.object({
  create: z.union([ z.lazy(() => TriggerCreateWithoutClauseCategoryInputSchema),z.lazy(() => TriggerCreateWithoutClauseCategoryInputSchema).array(),z.lazy(() => TriggerUncheckedCreateWithoutClauseCategoryInputSchema),z.lazy(() => TriggerUncheckedCreateWithoutClauseCategoryInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TriggerCreateOrConnectWithoutClauseCategoryInputSchema),z.lazy(() => TriggerCreateOrConnectWithoutClauseCategoryInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TriggerUpsertWithWhereUniqueWithoutClauseCategoryInputSchema),z.lazy(() => TriggerUpsertWithWhereUniqueWithoutClauseCategoryInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TriggerCreateManyClauseCategoryInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TriggerWhereUniqueInputSchema),z.lazy(() => TriggerWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TriggerWhereUniqueInputSchema),z.lazy(() => TriggerWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TriggerWhereUniqueInputSchema),z.lazy(() => TriggerWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TriggerWhereUniqueInputSchema),z.lazy(() => TriggerWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TriggerUpdateWithWhereUniqueWithoutClauseCategoryInputSchema),z.lazy(() => TriggerUpdateWithWhereUniqueWithoutClauseCategoryInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TriggerUpdateManyWithWhereWithoutClauseCategoryInputSchema),z.lazy(() => TriggerUpdateManyWithWhereWithoutClauseCategoryInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TriggerScalarWhereInputSchema),z.lazy(() => TriggerScalarWhereInputSchema).array() ]).optional(),
}).strict() as z.ZodType<Prisma.TriggerUpdateManyWithoutClauseCategoryNestedInput>;

export default TriggerUpdateManyWithoutClauseCategoryNestedInputSchema;
