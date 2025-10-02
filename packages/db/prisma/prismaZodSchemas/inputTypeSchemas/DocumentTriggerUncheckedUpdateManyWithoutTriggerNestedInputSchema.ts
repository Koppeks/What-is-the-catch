import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DocumentTriggerCreateWithoutTriggerInputSchema } from './DocumentTriggerCreateWithoutTriggerInputSchema';
import { DocumentTriggerUncheckedCreateWithoutTriggerInputSchema } from './DocumentTriggerUncheckedCreateWithoutTriggerInputSchema';
import { DocumentTriggerCreateOrConnectWithoutTriggerInputSchema } from './DocumentTriggerCreateOrConnectWithoutTriggerInputSchema';
import { DocumentTriggerUpsertWithWhereUniqueWithoutTriggerInputSchema } from './DocumentTriggerUpsertWithWhereUniqueWithoutTriggerInputSchema';
import { DocumentTriggerCreateManyTriggerInputEnvelopeSchema } from './DocumentTriggerCreateManyTriggerInputEnvelopeSchema';
import { DocumentTriggerWhereUniqueInputSchema } from './DocumentTriggerWhereUniqueInputSchema';
import { DocumentTriggerUpdateWithWhereUniqueWithoutTriggerInputSchema } from './DocumentTriggerUpdateWithWhereUniqueWithoutTriggerInputSchema';
import { DocumentTriggerUpdateManyWithWhereWithoutTriggerInputSchema } from './DocumentTriggerUpdateManyWithWhereWithoutTriggerInputSchema';
import { DocumentTriggerScalarWhereInputSchema } from './DocumentTriggerScalarWhereInputSchema';

export const DocumentTriggerUncheckedUpdateManyWithoutTriggerNestedInputSchema: z.ZodType<Prisma.DocumentTriggerUncheckedUpdateManyWithoutTriggerNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => DocumentTriggerCreateWithoutTriggerInputSchema), z.lazy(() => DocumentTriggerCreateWithoutTriggerInputSchema).array(), z.lazy(() => DocumentTriggerUncheckedCreateWithoutTriggerInputSchema), z.lazy(() => DocumentTriggerUncheckedCreateWithoutTriggerInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => DocumentTriggerCreateOrConnectWithoutTriggerInputSchema), z.lazy(() => DocumentTriggerCreateOrConnectWithoutTriggerInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => DocumentTriggerUpsertWithWhereUniqueWithoutTriggerInputSchema), z.lazy(() => DocumentTriggerUpsertWithWhereUniqueWithoutTriggerInputSchema).array() ]).optional(),
  createMany: z.lazy(() => DocumentTriggerCreateManyTriggerInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => DocumentTriggerWhereUniqueInputSchema), z.lazy(() => DocumentTriggerWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => DocumentTriggerWhereUniqueInputSchema), z.lazy(() => DocumentTriggerWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => DocumentTriggerWhereUniqueInputSchema), z.lazy(() => DocumentTriggerWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => DocumentTriggerWhereUniqueInputSchema), z.lazy(() => DocumentTriggerWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => DocumentTriggerUpdateWithWhereUniqueWithoutTriggerInputSchema), z.lazy(() => DocumentTriggerUpdateWithWhereUniqueWithoutTriggerInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => DocumentTriggerUpdateManyWithWhereWithoutTriggerInputSchema), z.lazy(() => DocumentTriggerUpdateManyWithWhereWithoutTriggerInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => DocumentTriggerScalarWhereInputSchema), z.lazy(() => DocumentTriggerScalarWhereInputSchema).array() ]).optional(),
});

export default DocumentTriggerUncheckedUpdateManyWithoutTriggerNestedInputSchema;
