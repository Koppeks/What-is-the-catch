import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DocumentTriggerCreateWithoutDocumentInputSchema } from './DocumentTriggerCreateWithoutDocumentInputSchema';
import { DocumentTriggerUncheckedCreateWithoutDocumentInputSchema } from './DocumentTriggerUncheckedCreateWithoutDocumentInputSchema';
import { DocumentTriggerCreateOrConnectWithoutDocumentInputSchema } from './DocumentTriggerCreateOrConnectWithoutDocumentInputSchema';
import { DocumentTriggerUpsertWithWhereUniqueWithoutDocumentInputSchema } from './DocumentTriggerUpsertWithWhereUniqueWithoutDocumentInputSchema';
import { DocumentTriggerCreateManyDocumentInputEnvelopeSchema } from './DocumentTriggerCreateManyDocumentInputEnvelopeSchema';
import { DocumentTriggerWhereUniqueInputSchema } from './DocumentTriggerWhereUniqueInputSchema';
import { DocumentTriggerUpdateWithWhereUniqueWithoutDocumentInputSchema } from './DocumentTriggerUpdateWithWhereUniqueWithoutDocumentInputSchema';
import { DocumentTriggerUpdateManyWithWhereWithoutDocumentInputSchema } from './DocumentTriggerUpdateManyWithWhereWithoutDocumentInputSchema';
import { DocumentTriggerScalarWhereInputSchema } from './DocumentTriggerScalarWhereInputSchema';

export const DocumentTriggerUpdateManyWithoutDocumentNestedInputSchema: z.ZodType<Prisma.DocumentTriggerUpdateManyWithoutDocumentNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => DocumentTriggerCreateWithoutDocumentInputSchema), z.lazy(() => DocumentTriggerCreateWithoutDocumentInputSchema).array(), z.lazy(() => DocumentTriggerUncheckedCreateWithoutDocumentInputSchema), z.lazy(() => DocumentTriggerUncheckedCreateWithoutDocumentInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => DocumentTriggerCreateOrConnectWithoutDocumentInputSchema), z.lazy(() => DocumentTriggerCreateOrConnectWithoutDocumentInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => DocumentTriggerUpsertWithWhereUniqueWithoutDocumentInputSchema), z.lazy(() => DocumentTriggerUpsertWithWhereUniqueWithoutDocumentInputSchema).array() ]).optional(),
  createMany: z.lazy(() => DocumentTriggerCreateManyDocumentInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => DocumentTriggerWhereUniqueInputSchema), z.lazy(() => DocumentTriggerWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => DocumentTriggerWhereUniqueInputSchema), z.lazy(() => DocumentTriggerWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => DocumentTriggerWhereUniqueInputSchema), z.lazy(() => DocumentTriggerWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => DocumentTriggerWhereUniqueInputSchema), z.lazy(() => DocumentTriggerWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => DocumentTriggerUpdateWithWhereUniqueWithoutDocumentInputSchema), z.lazy(() => DocumentTriggerUpdateWithWhereUniqueWithoutDocumentInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => DocumentTriggerUpdateManyWithWhereWithoutDocumentInputSchema), z.lazy(() => DocumentTriggerUpdateManyWithWhereWithoutDocumentInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => DocumentTriggerScalarWhereInputSchema), z.lazy(() => DocumentTriggerScalarWhereInputSchema).array() ]).optional(),
});

export default DocumentTriggerUpdateManyWithoutDocumentNestedInputSchema;
