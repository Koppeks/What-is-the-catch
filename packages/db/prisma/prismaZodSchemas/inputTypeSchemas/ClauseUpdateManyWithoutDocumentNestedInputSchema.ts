import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ClauseCreateWithoutDocumentInputSchema } from './ClauseCreateWithoutDocumentInputSchema';
import { ClauseUncheckedCreateWithoutDocumentInputSchema } from './ClauseUncheckedCreateWithoutDocumentInputSchema';
import { ClauseCreateOrConnectWithoutDocumentInputSchema } from './ClauseCreateOrConnectWithoutDocumentInputSchema';
import { ClauseUpsertWithWhereUniqueWithoutDocumentInputSchema } from './ClauseUpsertWithWhereUniqueWithoutDocumentInputSchema';
import { ClauseCreateManyDocumentInputEnvelopeSchema } from './ClauseCreateManyDocumentInputEnvelopeSchema';
import { ClauseWhereUniqueInputSchema } from './ClauseWhereUniqueInputSchema';
import { ClauseUpdateWithWhereUniqueWithoutDocumentInputSchema } from './ClauseUpdateWithWhereUniqueWithoutDocumentInputSchema';
import { ClauseUpdateManyWithWhereWithoutDocumentInputSchema } from './ClauseUpdateManyWithWhereWithoutDocumentInputSchema';
import { ClauseScalarWhereInputSchema } from './ClauseScalarWhereInputSchema';

export const ClauseUpdateManyWithoutDocumentNestedInputSchema: z.ZodType<Prisma.ClauseUpdateManyWithoutDocumentNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => ClauseCreateWithoutDocumentInputSchema), z.lazy(() => ClauseCreateWithoutDocumentInputSchema).array(), z.lazy(() => ClauseUncheckedCreateWithoutDocumentInputSchema), z.lazy(() => ClauseUncheckedCreateWithoutDocumentInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ClauseCreateOrConnectWithoutDocumentInputSchema), z.lazy(() => ClauseCreateOrConnectWithoutDocumentInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ClauseUpsertWithWhereUniqueWithoutDocumentInputSchema), z.lazy(() => ClauseUpsertWithWhereUniqueWithoutDocumentInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ClauseCreateManyDocumentInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ClauseWhereUniqueInputSchema), z.lazy(() => ClauseWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ClauseWhereUniqueInputSchema), z.lazy(() => ClauseWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ClauseWhereUniqueInputSchema), z.lazy(() => ClauseWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ClauseWhereUniqueInputSchema), z.lazy(() => ClauseWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ClauseUpdateWithWhereUniqueWithoutDocumentInputSchema), z.lazy(() => ClauseUpdateWithWhereUniqueWithoutDocumentInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ClauseUpdateManyWithWhereWithoutDocumentInputSchema), z.lazy(() => ClauseUpdateManyWithWhereWithoutDocumentInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ClauseScalarWhereInputSchema), z.lazy(() => ClauseScalarWhereInputSchema).array() ]).optional(),
});

export default ClauseUpdateManyWithoutDocumentNestedInputSchema;
