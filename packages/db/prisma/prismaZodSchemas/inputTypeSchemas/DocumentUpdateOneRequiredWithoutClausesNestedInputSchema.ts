import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DocumentCreateWithoutClausesInputSchema } from './DocumentCreateWithoutClausesInputSchema';
import { DocumentUncheckedCreateWithoutClausesInputSchema } from './DocumentUncheckedCreateWithoutClausesInputSchema';
import { DocumentCreateOrConnectWithoutClausesInputSchema } from './DocumentCreateOrConnectWithoutClausesInputSchema';
import { DocumentUpsertWithoutClausesInputSchema } from './DocumentUpsertWithoutClausesInputSchema';
import { DocumentWhereUniqueInputSchema } from './DocumentWhereUniqueInputSchema';
import { DocumentUpdateToOneWithWhereWithoutClausesInputSchema } from './DocumentUpdateToOneWithWhereWithoutClausesInputSchema';
import { DocumentUpdateWithoutClausesInputSchema } from './DocumentUpdateWithoutClausesInputSchema';
import { DocumentUncheckedUpdateWithoutClausesInputSchema } from './DocumentUncheckedUpdateWithoutClausesInputSchema';

export const DocumentUpdateOneRequiredWithoutClausesNestedInputSchema: z.ZodType<Prisma.DocumentUpdateOneRequiredWithoutClausesNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => DocumentCreateWithoutClausesInputSchema), z.lazy(() => DocumentUncheckedCreateWithoutClausesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => DocumentCreateOrConnectWithoutClausesInputSchema).optional(),
  upsert: z.lazy(() => DocumentUpsertWithoutClausesInputSchema).optional(),
  connect: z.lazy(() => DocumentWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => DocumentUpdateToOneWithWhereWithoutClausesInputSchema), z.lazy(() => DocumentUpdateWithoutClausesInputSchema), z.lazy(() => DocumentUncheckedUpdateWithoutClausesInputSchema) ]).optional(),
});

export default DocumentUpdateOneRequiredWithoutClausesNestedInputSchema;
