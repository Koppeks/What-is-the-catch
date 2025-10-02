import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DocumentTriggerWhereUniqueInputSchema } from './DocumentTriggerWhereUniqueInputSchema';
import { DocumentTriggerCreateWithoutDocumentInputSchema } from './DocumentTriggerCreateWithoutDocumentInputSchema';
import { DocumentTriggerUncheckedCreateWithoutDocumentInputSchema } from './DocumentTriggerUncheckedCreateWithoutDocumentInputSchema';

export const DocumentTriggerCreateOrConnectWithoutDocumentInputSchema: z.ZodType<Prisma.DocumentTriggerCreateOrConnectWithoutDocumentInput> = z.strictObject({
  where: z.lazy(() => DocumentTriggerWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => DocumentTriggerCreateWithoutDocumentInputSchema), z.lazy(() => DocumentTriggerUncheckedCreateWithoutDocumentInputSchema) ]),
});

export default DocumentTriggerCreateOrConnectWithoutDocumentInputSchema;
