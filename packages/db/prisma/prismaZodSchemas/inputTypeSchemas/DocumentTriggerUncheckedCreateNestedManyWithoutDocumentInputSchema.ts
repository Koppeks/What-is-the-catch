import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DocumentTriggerCreateWithoutDocumentInputSchema } from './DocumentTriggerCreateWithoutDocumentInputSchema';
import { DocumentTriggerUncheckedCreateWithoutDocumentInputSchema } from './DocumentTriggerUncheckedCreateWithoutDocumentInputSchema';
import { DocumentTriggerCreateOrConnectWithoutDocumentInputSchema } from './DocumentTriggerCreateOrConnectWithoutDocumentInputSchema';
import { DocumentTriggerCreateManyDocumentInputEnvelopeSchema } from './DocumentTriggerCreateManyDocumentInputEnvelopeSchema';
import { DocumentTriggerWhereUniqueInputSchema } from './DocumentTriggerWhereUniqueInputSchema';

export const DocumentTriggerUncheckedCreateNestedManyWithoutDocumentInputSchema: z.ZodType<Prisma.DocumentTriggerUncheckedCreateNestedManyWithoutDocumentInput> = z.strictObject({
  create: z.union([ z.lazy(() => DocumentTriggerCreateWithoutDocumentInputSchema), z.lazy(() => DocumentTriggerCreateWithoutDocumentInputSchema).array(), z.lazy(() => DocumentTriggerUncheckedCreateWithoutDocumentInputSchema), z.lazy(() => DocumentTriggerUncheckedCreateWithoutDocumentInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => DocumentTriggerCreateOrConnectWithoutDocumentInputSchema), z.lazy(() => DocumentTriggerCreateOrConnectWithoutDocumentInputSchema).array() ]).optional(),
  createMany: z.lazy(() => DocumentTriggerCreateManyDocumentInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => DocumentTriggerWhereUniqueInputSchema), z.lazy(() => DocumentTriggerWhereUniqueInputSchema).array() ]).optional(),
});

export default DocumentTriggerUncheckedCreateNestedManyWithoutDocumentInputSchema;
